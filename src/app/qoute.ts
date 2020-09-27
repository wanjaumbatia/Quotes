export class Quote {
    public upvote: number
    public downvote: number
    public submitDate: Date
    constructor(public name:string,public quote: string, public author: string) {
       this.downvote = 0;
       this.upvote = 0;
       this.submitDate = new Date;
    }
}
