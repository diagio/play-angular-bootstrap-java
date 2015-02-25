name := "play-angular-bootstrap-java"

version := "1.0-SNAPSHOT"

scalaVersion := "2.11.4"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

includeFilter in (Assets, LessKeys.less) := "*.less"

excludeFilter in (Assets, LessKeys.less) := "_*.less"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  javaWs,
  javaJpa,
  filters,
  "org.hibernate" % "hibernate-entitymanager" % "4.3.6.Final",
  "org.mongodb.morphia" % "morphia" % "0.110",
  "org.mongodb" % "bson" % "2.13.0",
  "org.mongodb" % "mongo-java-driver" % "2.13.0",
  "org.webjars" % "less" % "2.3.1",
  "org.webjars" % "requirejs" % "2.1.15",
  "io.spray" % "spray-can" % "1.3.1",
  "org.webjars" % "polymer" % "0.5.4",
  "org.webjars" % "bootstrap" % "3.1.1"
)     
