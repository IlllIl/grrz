import Todo from "@/models/Todo";
import workSerivce from '@/services/WorkService';
import Work from "@/models/Work";

declare var window: any;

class SocialService {

    share(todos: Todo[]) {
        let files = todos.filter(todo=>todo.piece).map(todo=>
            todo.piece
        ).map(todo=>{
            return JSON.parse(JSON.stringify(workSerivce.getById(todo)));
        }).filter(function (piece: Work, i, a): boolean {
            return (piece && piece.file);
        }).map(piece=>piece.file
        )
        console.log("files", files);
        var options = {
            message: this.generateMessages(todos), // not supported on some apps (Facebook, Instagram)
            subject: 'Deine Aufgaben :)', // fi. for email
            files: files, // an array of filenames either locally or remotely
            chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title,
        };

        var onSuccess = function (result: any) {
            console.log("Share completed? ", result.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: ", result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };

        var onError = function (msg: any) {
            console.log("Sharing failed with message: ", msg);
        };

        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

    }

    generateMessages(todos: Todo[]): string {
        return todos.filter(todo => !todo.isDone).map((todo: Todo) => {
            let res = todo.task;
            if (todo.piece) {
                let work = workSerivce.getById(todo.piece);
                if (work) {
                    res += "\nDas Stück \"" + work.title + "\" von " + work.author + ".\n";
                    if (work.location) {
                        res += "Das findest du hier " + work.location;
                    }
                }
            }
            return res;

        }).join("\n");

    }
}

export default new SocialService();