import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UsersApiService } from 'src/app/services/api/users/users-api.service';
import { MainLoaderService } from 'src/app/services/components/loaders/main-loader.service';
import { ToastGeneratorService } from 'src/app/services/components/toasts/toast-generator.service';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.sass']
})
export class DeleteUserModalComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private loaderService: MainLoaderService,
    private user: User,
    private route: ActivatedRoute,
    private toastService: ToastGeneratorService,
    public activeModal: NgbActiveModal
  ) { }

  async ngOnInit() {
    await this.usersApiService.deleteUser(
        this.route.snapshot.params["userId"]
    );

  }
}
