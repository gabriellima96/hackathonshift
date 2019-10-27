import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Comments";
  private PATH = "/comments";

  constructor(private db: AngularFireDatabase) {
    this.index()
  }

  index() {
    return this.db
      .list(this.PATH)
      .snapshotChanges()
      .subscribe(item => {
        console.log(item);
      });
  }
}
