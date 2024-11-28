export interface Dataset {
    originationPartner: 'ZooBank' | 'CreditDog' | 'MoneyTree'
}

export interface DatasetOne extends Dataset {
    originalBalance: number
    month: string
}

export interface DatasetTwo extends Dataset {
    interestRate: number
    region: 'Manchester' | 'Surrey' | 'London' | 'Devon' | 'Newcastle' | 'Sussex' | 'Oxfordshire' | 'Edinburgh'
}

export type Result = DatasetOne | DatasetTwo 

type ErrorMessage = string

interface APIResponseSuccess {
    success: true
    statusCode: number
    result: Result
}

interface APIResponseError {
    success: false
    statusCode: number
    result: ErrorMessage
}

export type APIResponse = APIResponseSuccess | APIResponseError

export type Endpoint = 'datasetOne' | 'datasetTwo'


const getData = async (endpoint: Endpoint):Promise<APIResponse> => {
    /* local json file intended to imitate api call */
    console.log(`${endpoint}.json`)
    const response = await fetch(`data/${endpoint}.json`,
        {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
    )
    return await response.json()
}

export default getData