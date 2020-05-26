package SchachSA

import SchachSA.controllerComponent.controllerBaseImpl.Controller
import SchachSA.view.TUI
import SchachSA.view.gui.SwingGui
import de.htwg.se.Schach.controller.controllerComponent.CellChanged

import scala.io.StdIn.readLine

object GameInstance {
  val controller = new Controller("Weiss", "Schwarz")
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
