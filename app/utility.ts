function getInputValue(elementID: string): string{
    const inputElemenet: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElemenet.value;
}

function logger(message: string): void{
    console.log(message);
}

export {getInputValue as getValue, logger} ;