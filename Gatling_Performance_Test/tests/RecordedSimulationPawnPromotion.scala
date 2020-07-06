package chess

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulationPawnPromotion extends Simulation {

	val httpProtocol = http
		.baseUrl("http://localhost:9090")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.userAgentHeader("PostmanRuntime/7.25.0")

	val headers_0 = Map("Postman-Token" -> "e43f6db7-6536-453f-8fd2-0a70fa859d83")

	val headers_1 = Map("Postman-Token" -> "23fe359d-527b-4c28-af91-c47810aa647e")

	val headers_2 = Map("Postman-Token" -> "0924f60b-b504-44e8-b8ef-6ee0ccbdc5f1")

	val headers_3 = Map("Postman-Token" -> "6c1a7ba9-e98d-4f37-9984-8fc0c46a9306")

	val headers_4 = Map("Postman-Token" -> "a6c73a9f-f0fa-4d72-9cab-9b5a9768fec9")

	val headers_5 = Map("Postman-Token" -> "1f562633-d77a-443d-9fa3-9b4b2f85d9aa")

	val headers_6 = Map("Postman-Token" -> "b0d33f8b-5eb7-4440-bd2a-0a7ffe3754ff")

	val headers_7 = Map("Postman-Token" -> "a33c837d-6dfb-473f-bdf4-6e793e99576c")

	val headers_8 = Map("Postman-Token" -> "b8a2a46d-74d0-4066-9206-9d0aee422375")

	val headers_9 = Map("Postman-Token" -> "14d813f1-3370-4b41-9e36-9aa92f388f1a")

	val headers_10 = Map("Postman-Token" -> "fecdc10f-ccb8-4bd1-acd3-c65b46fcac81")

	val headers_11 = Map("Postman-Token" -> "eddacf10-a7a0-46ca-b43d-634b73890778")

	val headers_12 = Map("Postman-Token" -> "42506c9a-6403-4aed-ad17-77770e4d4401")

	val headers_13 = Map("Postman-Token" -> "f1e23718-1de2-4ec7-ad00-4144eadd35f9")

	val headers_14 = Map("Postman-Token" -> "305bbc55-8605-4ee5-b237-f09adefeb07a")



	val scn = scenario("RecordedSimulationPawnPromotion")
		.exec(http("newField_0")
			.delete("/logic/newField")
			.headers(headers_0))
		.pause(3)
		.exec(http("cellContentBlack_1")
			.get("/logic/cellContentBlack?x=6&y=0")
			.headers(headers_1))
		.pause(2)
		.exec(http("move_2")
			.post("/logic/move?x=1&y=0&newX=3&newY=0")
			.headers(headers_2))
		.pause(2)
		.exec(http("move_3")
			.post("/logic/move?x=3&y=0&newX=4&newY=0")
			.headers(headers_3))
		.pause(2)
		.exec(http("move_4")
			.post("/logic/move?x=4&y=0&newX=5&newY=0")
			.headers(headers_4))
		.pause(2)
		.exec(http("move_5")
			.post("/logic/move?x=5&y=0&newX=6&newY=1")
			.headers(headers_5))
		.pause(2)
		.exec(http("move_6")
			.post("/logic/move?x=6&y=1&newX=7&newY=0")
			.headers(headers_6))
		.pause(2)
		.exec(http("pawnPromoting_7")
			.get("/logic/pawnPromoting")
			.headers(headers_7))
		.pause(3)
		.exec(http("choose_8")
			.post("/logic/choose?choosed=%E2%99%9B")
			.headers(headers_9))
		.pause(6)
		.exec(http("undo_9")
			.post("/logic/undo")
			.headers(headers_10))
		.pause(2)
		.exec(http("redo_10")
			.post("/logic/redo")
			.headers(headers_11))
		.pause(4)
		.exec(http("save_11")
			.post("/logic/save")
			.headers(headers_12))
		.pause(4)
		.exec(http("newField_12")
			.delete("/logic/newField")
			.headers(headers_13))
		.pause(7)
		.exec(http("load_13")
			.post("/logic/load")
			.headers(headers_14))

	setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)
}