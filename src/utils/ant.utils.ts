/* eslint-disable @typescript-eslint/no-explicit-any */

export class AntUtils {


    static convertAnyDataToAnySelectInput(data: any[], label: string, value: string,) {

        const result: any = []

        if (data?.length) {
            data.forEach((each: any) => {
                result.push({
                    label: each[label],
                    value: each[value]
                })
            })
        }

        return result

    }
}

