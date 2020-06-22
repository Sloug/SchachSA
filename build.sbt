name := "SchachSA"

version := "0.1"

scalaVersion := "2.12.8"

//lazy val userAPI = RootProject(uri("git://github.com/Sloug/SchachUser.git"))
//lazy val logicAPI = RootProject(uri("git://github.com/rarebu/swar-ss20-schach.git"))

lazy val root = (project in file("."))
lazy val model = root.settings(
  libraryDependencies ++= Seq(
    "org.scala-lang.modules" %% "scala-swing" % "2.1.1",
    "com.typesafe.play" %% "play-json" % "2.6.10",
    "com.typesafe.akka" %% "akka-http"   % "10.1.12",
    "com.typesafe.akka" %% "akka-stream" % "2.6.5",
    "de.heikoseeberger" %% "akka-http-play-json" % "1.32.0",
    "com.typesafe.slick" %% "slick" % "3.3.1",
    "org.slf4j" % "slf4j-nop" % "1.7.26",
    "com.typesafe.slick" %% "slick-hikaricp" % "3.3.1",
    "mysql" % "mysql-connector-java" % "6.0.6",
    "net.codingwell" %% "scala-guice" % "4.1.0",
    "com.google.inject" % "guice" % "4.1.0",
  )

)