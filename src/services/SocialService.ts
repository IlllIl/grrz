import Todo from "@/models/Todo";
declare var window: any;

 class SocialService {

    share(todos: Todo[]){
        var options = {
            message: this.generateMessages(todos), // not supported on some apps (Facebook, Instagram)
            subject: 'Deine Aufgaben :)', // fi. for email
            files: ['', ''], // an array of filenames either locally or remotely
            chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title,
        };

        var onSuccess = function(result: any) {
            console.log("Share completed? ", result.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: " , result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };

        var onError = function(msg : any) {
            console.log("Sharing failed with message: " , msg);
        };

        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

    }
     generateMessages(todos: Todo[]): string{
        return todos.filter(todo=>!todo.isDone).map(todo=> todo.toString()).join("\n");

     }
}

export default new SocialService();