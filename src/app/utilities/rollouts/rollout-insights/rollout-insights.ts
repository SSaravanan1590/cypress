import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';
import { FtpFoldersService, FolderNode } from '../../../services/ftpfolders.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FolderLists } from '../folder-lists/folder-lists';
@Component({
  selector: 'app-rollout-insights',
  imports: [CommonModule,FolderLists],
  standalone: true,
  templateUrl: './rollout-insights.html',
  styleUrl: './rollout-insights.css'
})
export class RolloutInsights {
  folders: FolderNode[] = [];
  loading = true;
  error = '';

  constructor(public globalService: GlobalService, private ftpService: FtpFoldersService) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Rollout Insights';
    }, 100);
  }

  ngOnInit(): void {
    this.ftpService.getFolders().subscribe({
      next: (data: FolderNode[]) => {
        this.folders = data;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load folders';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
