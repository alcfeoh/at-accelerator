import { Pipe, PipeTransform } from '@angular/core';
import {TvShowDetails} from './types';
import {formatDistance} from 'date-fns'

@Pipe({
  name: 'countdown',
  standalone: true
})
export class CountdownPipe implements PipeTransform {

  transform(value: TvShowDetails): string {
    if (value.countdown?.air_date){
      return "Next episode " + formatDistance(new Date(value.countdown.air_date), new Date(), {addSuffix: true});
    } else if (value.status == "Ended" || value.status == "Canceled/Ended") {
      return "Show has ended";
    } else {
      return  value.status + " but no next episode date";
    }

  }

}
