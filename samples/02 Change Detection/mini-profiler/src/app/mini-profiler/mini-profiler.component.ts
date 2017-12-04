import {ApplicationRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-profiler',
  templateUrl: './mini-profiler.component.html',
  styleUrls: ['./mini-profiler.component.css']
})
export class MiniProfilerComponent implements OnInit {
  counters: Counter[];
  counterLastActivity: Counter;

  constructor(appRef: ApplicationRef) {
    window["miniProfiler"] = this; // very ugly

    const counterAvgChangeDetection = {
      name: "Avg change detection",
      value: 0,
      total: 0,
    };

    const counterChangeDetections = {
      name: "Change detection",
      value: 0,
    };

    this.counterLastActivity = {
      name: "Last Activity",
      value: 0,
    };

    this.counters = [
      counterAvgChangeDetection,
      counterChangeDetections,
      this.counterLastActivity,
    ];

    const originalTick = appRef.tick;

    appRef.tick = function(){
      counterChangeDetections.value++;

      const before = performance.now();
      originalTick.apply(this, arguments);
      const after = performance.now();

      counterAvgChangeDetection.total += (after-before);
      counterAvgChangeDetection.value = (counterAvgChangeDetection.total / counterChangeDetections.value);
    }
  }

  ngOnInit() {
  }

}

interface Counter {
  name: string;
  value: number;
  total?: number;
}
