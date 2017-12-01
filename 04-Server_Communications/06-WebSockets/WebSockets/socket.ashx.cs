using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.WebSockets;

namespace WebSockets
{
    /// <summary>
    /// Summary description for socket
    /// </summary>
    public class socket : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            if (context.IsWebSocketRequest)
            {
                context.AcceptWebSocketRequest(ProcessWebSocketRequest);
            }
        }
        
        Task ProcessWebSocketRequest(AspNetWebSocketContext context)
        {
            var socket = context.WebSocket;
            var connection = new WebSocketHandler(socket);
            return connection.Start();
        }

        public bool IsReusable {
            get {
                return false;
            }
        }
    }
}