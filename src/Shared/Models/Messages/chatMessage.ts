export interface chatMessage {
    id: string
    senderId: string
    senderUsername: string
    senderPhotoURL: string
    receiverId: string
    receiverUsername: string
    receiverPhotoURL: string
    content: string
    dateRead?: string
    dateMessageSent: string
  }
  