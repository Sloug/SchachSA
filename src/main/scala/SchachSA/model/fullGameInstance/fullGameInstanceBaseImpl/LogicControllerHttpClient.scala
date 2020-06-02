package SchachSA.model.fullGameInstance.fullGameInstanceBaseImpl

import java.util.concurrent.TimeUnit

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.Uri.Query
import akka.http.scaladsl.model.{HttpRequest, Uri}
import akka.http.scaladsl.unmarshalling._
import akka.http.scaladsl.client.RequestBuilding._
import akka.stream.ActorMaterializer
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import play.api.libs.json.{JsValue, Json}

import scala.concurrent.{Await, ExecutionContextExecutor, Future}
import scala.concurrent.duration.Duration

case class LogicControllerHttpClient(logicControllerServerAddress: String) extends PlayJsonSupport {
  def this() = this("http://localhost:9090")
  implicit val system: ActorSystem = ActorSystem()
  implicit val materializer: ActorMaterializer = ActorMaterializer()
  implicit val executionContext: ExecutionContextExecutor = system.dispatcher
  val logicSection = logicControllerServerAddress + "/logic/"
  def newField: Unit = {

  }

  def cellContentBlack(x: Int, y: Int): Option[Boolean] = {
    val params = Map("x" -> x.toString, "y" -> y.toString)
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "cellContentBlack").withQuery(Query(params))))
    val future = response.flatMap(r => Unmarshal(r.entity).to[Option[String]])
    val result = Await.result(future, Duration(1, TimeUnit.SECONDS))
    if (result.isDefined) Some(result.get.toBoolean) else None
  }

  def move(x: Int, y: Int, newX: Int, newY: Int): Boolean = {
    val params = Map("x" -> x.toString, "y" -> y.toString, "newX" -> newX.toString, "newY" -> newY.toString)
    val response = Http().singleRequest(Post(uri = Uri(logicSection + "move").withQuery(Query(params))))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS)).toBoolean
  }

  def pawnPromoting: Option[String] = {
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "pawnPromoting")))
    val future = response.flatMap(r => Unmarshal(r.entity).to[Option[String]])
    Await.result(future, Duration(1, TimeUnit.SECONDS))
  }

  def choose(choosed: String): Boolean = {
    val params = Map("choosed" -> choosed)
    val response = Http().singleRequest(Post(uri = Uri(logicSection + "choose").withQuery(Query(params))))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS)).toBoolean
  }

  def undo = {
    Http().singleRequest(Post(uri = Uri(logicSection + "undo")))
  }

  def redo = {
    Http().singleRequest(Post(uri = Uri(logicSection + "redo")))
  }

  def save = {
    Http().singleRequest(Post(uri = Uri(logicSection + "save")))
  }

  def load = {
    Http().singleRequest(Post(uri = Uri(logicSection + "load")))
  }

  def getChangeableFigures: String = {
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "getChangeableFigures")))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS))
  }

  def statusText: String = {
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "statusText")))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS))
  }

  def fieldToString: String = {
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "fieldToString")))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS))
  }

  def cellContains(row: Int, col: Int): String = {
    val params = Map("x" -> row.toString, "y" -> col.toString)
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "cellContains").withQuery(Query(params))))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS))
  }

  def cellIsBlack(row: Int, col: Int): Boolean = {
    val params = Map("x" -> row.toString, "y" -> col.toString)
    val response = Http().singleRequest(HttpRequest(uri = Uri(logicSection + "cellIsBlack").withQuery(Query(params))))
    val future = response.flatMap(r => Unmarshal(r.entity).to[String])
    Await.result(future, Duration(1, TimeUnit.SECONDS)).toBoolean
  }
}
