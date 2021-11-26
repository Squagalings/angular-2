import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FilterPipe} from '../filter.pipe';
import { LoggingService } from '../logging.service';

@Component({
  moduleId: module.id,
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes: [FilterPipe]
})
export class DirectoryComponent implements OnInit {
  ninjas = [];
  bool = null;

  constructor(private logger: LoggingService) { }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
  }

}
