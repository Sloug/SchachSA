package SchachSA.aview.gui

import SchachSA.controllerComponent.InstanceControllerInterface
import de.htwg.se.Schach.controller.controllerComponent.CellChanged

import scala.swing.Swing.LineBorder
import scala.swing._
import scala.swing.event._

class CellPanel(row: Int, column: Int, controller: InstanceControllerInterface) extends FlowPanel {

//  def myCell = controller.cell(row, column)

  def cellText(row: Int, col: Int) = controller.cellContains(row, col)

  val label =
    new Label {
      text = cellText(row, column)
      font = new Font("Verdana", 1, 36)
    }

  val cell = new BoxPanel(Orientation.Horizontal) {
    contents += label
    preferredSize = new Dimension(75, 75)
    background = if (controller.cellIsBlack(row, column)) java.awt.Color.GRAY else java.awt.Color.WHITE
    border = LineBorder(java.awt.Color.BLACK, 2)
    border = Swing.BeveledBorder(Swing.Raised)
    listenTo(mouse.clicks)
    listenTo(controller)
    reactions += {
      case e: CellChanged => {
        label.text = cellText(row, column)
        repaint
      }
      case MouseClicked(src, pt, mod, clicks, pops) => {
        if(controller.select(row, column)) repaint else Dialog.showMessage(contents.head, "You have to choose a " +
          controller.whoseTurn + " figure!", title="Watch out")
      }
    }
  }
  contents += cell

  def redraw = {
    contents.clear()
    label.text = cellText(row, column)
    contents += cell
    repaint
  }
}