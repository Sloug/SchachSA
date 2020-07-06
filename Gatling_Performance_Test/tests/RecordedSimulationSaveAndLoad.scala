package chess

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulationSaveAndLoad extends Simulation {

	val httpProtocol = http
		.baseUrl("http://localhost:9090")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.userAgentHeader("PostmanRuntime/7.25.0")

	val headers_12 = Map("Postman-Token" -> "42506c9a-6403-4aed-ad17-77770e4d4401")

	val headers_14 = Map("Postman-Token" -> "305bbc55-8605-4ee5-b237-f09adefeb07a")



	val scn = scenario("RecordedSimulationSaveAndLoad")
		.exec(http("save_2")
			.post("/logic/save")
			.headers(headers_12))
		.pause(1)
		.exec(http("load_4")
			.post("/logic/load")
			.headers(headers_14))

	setUp(scn.inject(atOnceUsers(4000))).protocols(httpProtocol)
}