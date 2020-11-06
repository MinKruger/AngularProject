export class Message {
    constructor(
        public messageId: string,
        public userId: string,
        public username: string,
        public content: string,
    ){}
}