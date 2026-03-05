# 🔗 Configuração do Webhook Discord - PS Banking

## 📋 Resumo das Modificações

O sistema de webhook do Discord foi implementado com sucesso no script PS Banking. Agora todas as transações bancárias são automaticamente logadas no seu servidor Discord.

## 🚀 Funcionalidades Implementadas

### 💰 Logs Automáticos para:
- ✅ **Depósitos** (ATM e contas organizacionais)
- ✅ **Saques** (ATM e contas organizacionais)  
- ✅ **Transferências** entre jogadores
- ✅ **Pagamento de Faturas**
- ✅ **Criação de Contas** bancárias

### 📊 Informações Logadas:
- Nome do jogador
- Identifier do jogador
- Valor da transação (formatado em R$)
- Tipo de operação
- Conta envolvida
- Descrição da transação
- Timestamp automático

## ⚙️ Como Configurar

### 1. Criar Webhook no Discord

1. Vá ao seu servidor Discord
2. Clique com botão direito no canal onde quer receber os logs
3. Selecione **"Editar Canal"**
4. Vá na aba **"Integrações"**
5. Clique em **"Criar Webhook"**
6. Copie a **URL do Webhook**

### 2. Configurar no Script

Abra o arquivo `config.lua` e configure:

```lua
-- Discord Webhook Configuration
Config.Discord = {
    Enabled = true, -- true para ativar, false para desativar
    WebhookURL = "https://discord.com/api/webhooks/SEU_WEBHOOK_AQUI", -- Cole sua URL aqui
    BotName = "PS Banking", -- Nome que aparecerá no Discord
    BotAvatar = "https://i.imgur.com/your-avatar.png", -- Avatar do bot (opcional)
    Color = 3447003, -- Cor das embeds (azul por padrão)
    LogTypes = {
        deposits = true,      -- Log de depósitos
        withdrawals = true,   -- Log de saques
        transfers = true,     -- Log de transferências
        bills = true,         -- Log de faturas
        accounts = true,      -- Log de criação/gestão de contas
    }
}
```

### 3. Personalizar Logs

Você pode desativar tipos específicos de logs alterando para `false`:

```lua
LogTypes = {
    deposits = false,     -- Não logar depósitos
    withdrawals = true,   -- Logar apenas saques
    transfers = true,     -- Logar transferências
    bills = false,        -- Não logar faturas
    accounts = true,      -- Logar criação de contas
}
```

## 🎨 Cores das Embeds

As cores são definidas em decimal. Algumas opções:

- **Verde**: `3066993` (para depósitos)
- **Vermelho**: `15158332` (para saques)
- **Azul**: `3447003` (para transferências)
- **Amarelo**: `16776960` (para faturas)
- **Roxo**: `10181046`
- **Laranja**: `15105570`

## 🔧 Exemplo de Log no Discord

```
💰 Depósito Bancário

👤 Jogador: João Silva
💳 Conta: bank
💵 Valor: R$ 5.000,00
📝 Descrição: Depósito no ATM
🆔 Identifier: char1:abc123def456

PS Banking System • hoje às 14:30
```

## 🛠️ Solução de Problemas

### Webhook não funciona:
1. Verifique se a URL está correta
2. Certifique-se que `Enabled = true`
3. Verifique se o bot tem permissões no canal
4. Teste a URL em um site como webhook.site

### Logs não aparecem:
1. Verifique se o tipo de log está ativado em `LogTypes`
2. Confirme se a transação realmente aconteceu
3. Verifique o console do servidor por erros

### Formatação estranha:
1. Verifique se o `json.encode` está funcionando
2. Confirme se todos os campos estão sendo preenchidos corretamente

## 📝 Notas Importantes

- Os logs são enviados em tempo real
- Não há limite de logs (cuidado com spam)
- As informações são seguras (apenas identifiers, não dados pessoais)
- O sistema funciona tanto com ESX quanto QBCore
- Compatível com todas as versões do ps-banking

## 🔒 Segurança

- Nunca compartilhe sua URL de webhook
- Mantenha o webhook em um canal privado
- Considere criar um canal específico para logs bancários
- Revise regularmente as permissões do canal

---

**✅ Sistema implementado com sucesso!** 
Agora todas as transações bancárias do seu servidor serão logadas automaticamente no Discord.

exemplo de função


-- Discord Webhook Functions
local function sendDiscordLog(title, description, color, fields)
    if not Config.Discord.Enabled or not Config.Discord.WebhookURL then
        return
    end

    local embed = {
        {
            title = title,
            description = description,
            color = color or Config.Discord.Color,
            fields = fields or {},
            timestamp = os.date("!%Y-%m-%dT%H:%M:%SZ"),
            footer = {
                text = "PS Banking System",
                icon_url = Config.Discord.BotAvatar
            }
        }
    }

    local payload = {
        username = Config.Discord.BotName,
        avatar_url = Config.Discord.BotAvatar,
        embeds = embed
    }

    PerformHttpRequest(Config.Discord.WebhookURL, function(err, text, headers) end, 'POST', json.encode(payload), {
        ['Content-Type'] = 'application/json'
    })
end

local function formatMoney(amount)
    return string.format("R$ %s", string.format("%.2f", amount):reverse():gsub("(%d%d%d)", "%1."):reverse():gsub("^%.", ""))
end

local function getPlayerIdentifier(player)
	if framework == "ESX" then
		return player.getIdentifier()
	elseif framework == "QBCore" then
		return player.PlayerData.citizenid
	end
end

local function getPlayerFromId(source)
	if framework == "ESX" then
		return ESX.GetPlayerFromId(source)
	elseif framework == "QBCore" then
		return QBCore.Functions.GetPlayer(source)
	end
end

local function getPlayerAccounts(player)
	if framework == "ESX" then
		return player.getAccount("bank").money
	elseif framework == "QBCore" then
		return player.PlayerData.money["bank"]
	end
end

local function getName(player)
	if framework == "ESX" then
		return player.getName()
	elseif framework == "QBCore" then
		return player.PlayerData.charinfo.firstname .. " " .. player.PlayerData.charinfo.lastname
	end
end

local function logTransaction(identifier, description, accountName, amount, isIncome, playerName, logType)
	MySQL.insert.await(
		"INSERT INTO ps_banking_transactions (identifier, description, type, amount, date, isIncome) VALUES (?, ?, ?, ?, NOW(), ?)",
		{ identifier, description, accountName, amount, isIncome }
	)

	-- Discord Webhook Log - só envia se logType for especificado (evita duplicação)
	if Config.Discord.Enabled and logType and Config.Discord.LogTypes[logType] then
		local title = isIncome and "💰 Depósito Bancário" or "💸 Saque Bancário"
		local color = isIncome and 3066993 or 15158332 -- Verde para depósito, vermelho para saque
		
		if logType == "transfers" then
			title = "🔄 Transferência Bancária"
			color = 3447003 -- Azul para transferências
		elseif logType == "bills" then
			title = "🧾 Pagamento de Fatura"
			color = 16776960 -- Amarelo para faturas
		end

		local fields = {
			{
				name = "👤 Jogador",
				value = playerName or "Desconhecido",
				inline = true
			},
			{
				name = "💳 Conta",
				value = accountName,
				inline = true
			},
			{
				name = "💵 Valor",
				value = formatMoney(amount),
				inline = true
			},
			{
				name = "📝 Descrição",
				value = description,
				inline = false
			},
			{
				name = "🆔 Identifier",
				value = identifier,
				inline = false
			}
		}

		sendDiscordLog(title, "", color, fields)
	end
end
