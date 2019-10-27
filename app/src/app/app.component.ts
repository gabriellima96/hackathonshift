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
    local = ["Está na Praia", "Está na Parada de ônibus", "Está no Shopping", "Está no Terminal Rodoviário", "Está no Metrô", "Está no Parque", "Está no Zoológico", "Está no Aeroporto"]
    citys = ["Blumenau, Sc", "Rio de Janeiro, RJ", "Maceió, AL", "Florianópolis, SC", "Curitiba, PR", "Sào Paulo, SP", "Sào Luiz, MA", "Palmas, TO"]
    // coments: "Uhuu"
    // country: "Alemanha"
    // image: "https://www.clipartmax.com/png/full/194-1942009_pirate-free-icon-french-girl-cartoon-png.png"
    // key: "saudhhdf"
    // likes: 5
    // name: "Lorena Lima"
    // user: "lorenalima28"


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

    enviar(comment, name) {
        console.log(comment.value, name.value)
        if (comment.value.trim().length > 0 && name.value.trim().length > 0) {
            let p = new Post()
            p.coments = comment.value
            p.name = name.value
            p.country = this.citys[Math.floor(Math.random() * this.citys.length)];
            p.user = this.local[Math.floor(Math.random() * this.local.length)];
            this.post(p)
            comment.value = ""
            name.value = ""
        } else {
            alert("Campos Vazios")
        }
    }


    post(post: Post) {
        this.db.list(this.PATH).push(post);
    }

}

export class Post { coments: string; country: string; image: string; key: string; name: string; user: string; likes: number; }