//async compute

function getData(str: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str === 'error') {
                reject('Error occurred');
            } else {
                resolve(`Data: ${str}`);
            }
        }, 5000);
    });
}


//async call
async function call(){
    
    console.log('step1');
    let result = await getData('step2');
    console.log(result);
    console.log('step3');
    
}


//  console.log('This will execute immediately');
// getData('Hello').then(data => {
//     console.log(data);
// }).catch(error => {    console.error(error);
// });
//     console.log('This will also execute immediately');

call();