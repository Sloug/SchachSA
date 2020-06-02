package SchachSA.model.fullGameInstance.fullGameInstanceBaseImpl

import java.util.concurrent.TimeUnit

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.client.RequestBuilding.Post
import akka.http.scaladsl.model.{HttpRequest, Uri}
import akka.http.scaladsl.unmarshalling.Unmarshal
import akka.stream.ActorMaterializer
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport

import scala.concurrent.{Await, ExecutionContextExecutor}
import scala.concurrent.duration.Duration

case class UserControllerHttpClient(userControllerServerAddress: String) extends PlayJsonSupport {
  def this() = this("http://localhost:7070")
  implicit val system: ActorSystem = ActorSystem()
  implicit val materializer: ActorMaterializer = ActorMaterializer()
  implicit val executionContext: ExecutionContextExecutor = system.dispatcher
  val userSection = userControllerServerAddress + "/user/"
  def whitesTurn: Boolean = {
    val response = Http().singleRequest(HttpRequest(uri = Uri(userSection + "whitesTurn")))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS)).toBoolean
  }

  def nextRound = {
    Http().singleRequest(Post(uri = Uri(userSection + "nextRound")))
  }

  def undoRound = {
    Http().singleRequest(Post(uri = Uri(userSection + "undoRound")))
  }

  def whoseTurn: String = {
    val response = Http().singleRequest(HttpRequest(uri = Uri(userSection + "whoseTurn")))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS))
  }
}
