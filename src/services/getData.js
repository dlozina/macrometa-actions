const FABRIC = process.env.REACT_APP_FABRIC_NAME;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getQueryWorkerData(queryWorkerName) {
    const response = await fetch(
        `${BASE_URL}/_fabric/${FABRIC}/_api/restql/execute/${queryWorkerName}`,
        {
            method: "POST",
            headers: {
                Authorization: `apiKey ${API_KEY}`,
                accept: "application/json",
            },
            body: "{}",
        },
    );
    return await response.json();
}
