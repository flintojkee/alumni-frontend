import { Pipe, PipeTransform } from '@angular/core';
import { InviteStatus } from '@alm/app/shared';

@Pipe({
  name: 'inviteStatusColor'
})
export class InviteStatusColorPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    switch (value) {
      case InviteStatus.invited:
        return 'primary';
      case InviteStatus.noResponse:
        return 'accent';
      case InviteStatus.rejected:
        return 'warn';
      case InviteStatus.notInvited:
        return 'gray';
      default:
        break;
    }
    return null;
  }
}
