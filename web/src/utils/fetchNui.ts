/**
* @param eventName - The endpoint eventname to target
* @param data - Data you wish to send in the NUI Callback
*
* @return returnData - A promise for the data sent back by the NuiCallbacks CB argument
*/

import { isEnvBrowser } from "./misc";
import { MockLocales, MockMoneyTypes, MockWeeklySummary, MockBills, MockTransactions, MockAccounts } from "./mockData";

export async function fetchNui<T = any>(
  eventName: string,
  data: unknown = {}
): Promise<T> {
  if (isEnvBrowser()) {
    switch (eventName) {
      case "ps-banking:client:getLocales":
        return MockLocales as unknown as T;
      case "ps-banking:client:getMoneyTypes":
        return MockMoneyTypes as unknown as T;
      case "ps-banking:client:getWeeklySummary":
        return MockWeeklySummary as unknown as T;
      case "ps-banking:client:getBills":
        return MockBills as unknown as T;
      case "ps-banking:client:getHistory":
        return MockTransactions as unknown as T;
      case "ps-banking:client:getAccounts":
        return MockAccounts as unknown as T;
      case "ps-banking:client:phoneOption":
        return false as unknown as T;
      case "ps-banking:client:ATMwithdraw":
      case "ps-banking:client:ATMdeposit":
      case "ps-banking:client:payAllBills":
      case "ps-banking:client:payBill":
        return true as unknown as T;
      case "ps-banking:client:transferMoney":
        return { success: true, message: "Transferred successfully" } as unknown as T;
      case "ps-banking:client:getColorConfig":
        return { color: "#3b82f6" } as unknown as T; // Default blue
      default:
        console.warn(`No mock data found for event: ${eventName}`);
        return null as unknown as T;
    }
  }

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  const resourceName = (window as any).GetParentResourceName
    ? (window as any).GetParentResourceName()
    : "nui-frame-app";

  const resp = await fetch(`https://${resourceName}/${eventName}`, options);

  return await resp.json();
}
