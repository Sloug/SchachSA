name := "SchachSA"

version := "0.1"

scalaVersion := "2.12.8"


//libraryDependencies += "org.scala-lang.modules" %% "scala-swing" % "2.1.1"
//libraryDependencies += "com.typesafe.play" %% "play-json" % "2.6.10"
//libraryDependencies += "com.typesafe.akka" %% "akka-http"   % "10.1.12"

lazy val userAPI = RootProject(uri("git://github.com/Sloug/SchachUser.git"))
lazy val logicAPI = RootProject(uri("git://github.com/rarebu/swar-ss20-schach.git"))

lazy val root = (project in file("."))
lazy val model = root.dependsOn(userAPI, logicAPI).settings(
  libraryDependencies ++= Seq(
    "org.scala-lang.modules" %% "scala-swing" % "2.1.1",
    "com.typesafe.play" %% "play-json" % "2.6.10",
    "com.typesafe.akka" %% "akka-http"   % "10.1.12",
    "com.typesafe.akka" %% "akka-stream" % "2.6.5",
    "de.heikoseeberger" %% "akka-http-play-json" % "1.32.0",
  )

)