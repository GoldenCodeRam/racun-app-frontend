import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/role';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-show-role',
  templateUrl: './show-role.component.html',
  styleUrls: ['./show-role.component.sass']
})
export class ShowRoleComponent implements OnInit {
    public role!: Role;

  constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) { }

  async ngOnInit(){
        this.role = await this.apiService.getRole(
            this.route.snapshot.params["roleId"]
        );
  }
}
