import { Component, Input } from '@angular/core';
import { FolderNode } from '../../../services/ftpfolders.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-folder-lists',
  imports: [CommonModule],
  templateUrl: './folder-lists.html',
  styleUrl: './folder-lists.css'
})
export class FolderLists {
  @Input() node!: FolderNode;
}