export type Direction = "inbound" | "outbound";
export type Message = {
  id: string;
  direction: Direction;
  body: string;
  timestamp: string;
  linkedBy?: string;
  orderNumber?: string;
};
export type MessageThread = {
  id: string; // caseId
  merchant: string;
  subject: string;
  unreadCount: number;
  messages: Message[];
};

export const messageThreads: MessageThread[] = [
  {
    id: "case-123",
    merchant: "Best Buy",
    subject: "Price match request for Sony WH-1000XM5",
    unreadCount: 1,
    messages: [
      {
        id: "m1",
        direction: "outbound",
        body: "Hi — please price match to $299 at CompetitorCo.",
        timestamp: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
        orderNumber: "BB-7788",
      },
      {
        id: "m2",
        direction: "inbound",
        body: "Thanks! Please share a link to the competitor price.",
        timestamp: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
        linkedBy: "Subject / Message-ID / Order #",
      },
    ],
  },
  {
    id: "case-456",
    merchant: "Target",
    subject: "Return authorization for Order TG-1234",
    unreadCount: 0,
    messages: [
      {
        id: "m3",
        direction: "outbound",
        body: "Requesting return label for unopened item.",
        timestamp: new Date(Date.now() - 72 * 3600 * 1000).toISOString(),
        orderNumber: "TG-1234",
      },
    ],
  },
];