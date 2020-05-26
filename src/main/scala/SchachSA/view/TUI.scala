package SchachSA.view

import SchachSA.controllerComponent.InstanceControllerInterface
import SchachSA.controllerComponent.CellChanged

import scala.swing.Reactor


class TUI(controller: InstanceControllerInterface) extends Reactor {
  listenTo(controller)

  def processInputLine(input: String): Unit = {
    val pattern = {
      "[" + controller.getChangeableFigures + "]"
    }.r
    input match {
      case "q" =>
      case "n" => controller.restart
      case "z" => controller.undo
      case "y" => controller.redo
      case "f" => controller.saveField
      case "l" => controller.loadField
      case _ => input.toList.filter(c => c != ' ').filter(_.isDigit).map(c => c.toString.toInt) match {
        case row :: column :: newRow :: newColumn :: Nil => {
          if(controller.select(row, column)) {
            controller.select(newRow, newColumn)
          } else println("You have to move a" + controller.whoseTurn + "figure")
        }
        case _ => {
          pattern.findFirstIn(input) match {
            case Some(c) => controller.choose(c)
            case _ => println("Wrong input!")
          }
        }
      }
    }
  }

  reactions += {
    case event: CellChanged => printTui
  }

  def printTui: Unit = {
    println(controller.statusText)
    println(controller.fieldToString);
  }
}