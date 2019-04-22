import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentfilter'
})
export class StudentfilterPipe implements PipeTransform {

  transform(value: any, searchString: any, category: any): any {
    let filteredList = value;

    // Filter the data according to value of the search box.
    if (searchString !== undefined && searchString !== null && searchString !== '' && value) {
      filteredList = filteredList.filter(data => (data.name.toLowerCase()).indexOf(searchString.toLowerCase()) > -1);
    }

    // Filter the data according to the category selected from drop down.
    if (category !== undefined && category !== null && category !== '' && category !== 'All' && value) {
      filteredList = filteredList.filter(data => (data.category === category));
    }

    return filteredList;
  }

}
