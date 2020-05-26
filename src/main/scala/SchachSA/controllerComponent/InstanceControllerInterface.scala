package SchachSA.controllerComponent

import scala.swing.Publisher

trait InstanceControllerInterface extends Publisher
{
  def select(x: Int, y: Int): Boolean

  def choose(choosed: String): Boolean

  def restart: Unit

  def undo: Unit

  def redo: Unit

  def saveField: Unit

  def loadField: Unit

  def getChangeableFigures: String

  def whoseTurn: String

  def statusText: String

  def fieldToString: String

  def cellContains(row: Int, col: Int): String

  def cellIsBlack(row: Int, col: Int): Boolean

  def pawnPromoting: Option[String]
}

import scala.swing.event.Event

class CellChanged extends Event
//class NextTurn extends Event