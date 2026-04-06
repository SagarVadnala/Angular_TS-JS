import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, ...args: string[]): string[] {
    //return 'hello ' + value;

    ////sample 2
    // let val = value as string;
    // let prefix = args[0];
    // let fillChar = args[1];
    // let newval = val.toString().padStart(10,fillChar); 

    // return prefix + newval;

    //sample 3

    let searchText = args[0];
    let newvals = value as string[];
    let filteredVals = [];
    if (searchText !== null) {
      filteredVals = newvals.filter(name => name.indexOf(searchText) !== -1);
    }
    else {
      filteredVals = newvals;
    }


    return filteredVals;
  }

}
