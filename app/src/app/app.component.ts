import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Comments";
  private PATH = "/posts";
  data;

  constructor(private db: AngularFireDatabase) {
    this.index()
  }

  index() {
    return this.db
      .list(this.PATH)
      .snapshotChanges()
      .subscribe(items => {
        // console.log(items);
        this.data = items.map(item => ({ key: item.key, ...item.payload.val() }));
        console.log(this.data);

      });
  }
}
