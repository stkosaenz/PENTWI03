using Microsoft.AspNet.SignalR;

namespace WebSockets
{
    public class MessageHub: Hub
    {
        public void ProcessMessage(string message) {
            Clients.All.MessageProcessed(message + " PROCESSED!!");
        }
    }
}