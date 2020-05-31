name := "SchachSA"

version := "0.1"

scalaVersion := "2.12.8"


//libraryDependencies += "org.scala-lang.modules" %% "scala-swing" % "2.1.1"
//libraryDependencies += "com.typesafe.play" %% "play-json" % "2.6.10"

lazy val userAPI = RootProject(uri("git://github.com/Sloug/SchachUser.git"))
lazy val logicAPI = RootProject(uri("git://github.com/rarebu/swar-ss20-schach.git"))

lazy val root = (project in file("."))
lazy val model = root.dependsOn(userAPI, logicAPI).settings(
  libraryDependencies ++= Seq(
    "org.scala-lang.modules" %% "scala-swing" % "2.1.1",
    "com.typesafe.play" %% "play-json" % "2.6.10"
  )

)