package SchachSA

import SchachSA.controllerComponent.controllerBaseImpl.Controller
import SchachSA.aview.TUI
import SchachSA.aview.gui.SwingGui
import de.htwg.se.Schach.controller.controllerComponent.CellChanged

import scala.io.StdIn.readLine

object GameInstance {
  val controller = new Controller
  val tui = new TUI(controller)
  val gui = new SwingGui(controller)
  controller.publish(new CellChanged)

  def main(args: Array[String]): Unit = {
  var input: String = ""
  do {
    input = readLine()
    tui.processInputLine(input)
  } while (input != "q")
  }
}
