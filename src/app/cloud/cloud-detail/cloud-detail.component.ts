import { Component, OnInit } from '@angular/core';
import { INewCloud } from 'src/app/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { CloudOperationsService } from '../services/cloud-operations.service';

@Component({
  selector: 'app-cloud-detail',
  templateUrl: './cloud-detail.component.html',
  styleUrls: ['./cloud-detail.component.scss']
})
export class CloudDetailComponent implements OnInit {
  cloudId: string;
  parentRouteId: number;
  cloud:INewCloud={
    domain:'',
    id:'',
    is_responding:false,
    name:'',
    password:'',
    url:'',
    user:''
  };
  constructor(private route: ActivatedRoute,
    private router: Router,  private cloudOperationService: CloudOperationsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cloudId = params['id'];
    });
    this.cloudOperationService.currentCloudData.subscribe(data=>{
      this.cloud = data.filter(cld=>
        {return (cld.id==this.cloudId)?true:false})[0]
        console.log(this.cloud);
        
    })
  }

}
