export interface resposeData {
    name: string
    age: number
}

export async function get({params}: string){
    return {
        body: JSON.stringify([
            {
                name: 'Maguete',
                age: 48
            }
        ])
    }
}