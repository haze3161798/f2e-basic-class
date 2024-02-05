export const mockApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        id: crypto.randomUUID(),
                        name: '吃飯'
                    },
                    {
                        id: crypto.randomUUID(),
                        name: '睡覺'
                    },
                ],
                status: 200,
                errorCode: ''
            })
        }, Math.floor(Math.random() * 1000))
    })
}