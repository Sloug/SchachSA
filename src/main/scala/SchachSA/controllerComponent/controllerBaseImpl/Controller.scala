package SchachSA.controllerComponent.controllerBaseImpl

import SchachSA.controllerComponent.InstanceControllerInterface
import SchachSA.model.fullGameInstance.FullGameInstanceInterface
import SchachSA.model.fullGameInstance.fullGameInstanceBaseImpl.GameInstance
import SchachSA.controllerComponent.CellChanged

import scala.swing.Publisher

case class Controller(gameInstance: FullGameInstanceInterface) extends InstanceControllerInterface with Publisher {
  def this(nameWhite: String, nameBlack: String) = this(new GameInstance(nameWhite, nameBlack))

  override def select(x: Int, y: Int): Boolean = {
    val tmp = gameInstance.select(x, y)
    if(tmp) publish(new CellChanged)
    tmp
  }

  override def choose(choosed: String): Boolean = {
    val tmp = gameInstance.choose(choosed)
    if(tmp) publish(new CellChanged)
    tmp
  }

  override def restart: Unit = {
    gameInstance.restart
    publish(new CellChanged)
  }

  override def undo: Unit = {
    gameInstance.undo
    publish(new CellChanged)
  }

  override def redo: Unit = {
    gameInstance.redo
    publish(new CellChanged)
  }

  //does not work, since user is not safed
  override def saveField: Unit = {
    gameInstance.saveField
    publish(new CellChanged)
  }

  //does not work, since user is not safed
  override def loadField: Unit = {
    gameInstance.loadField
    publish(new CellChanged)
  }

  override def getChangeableFigures: String = gameInstance.getChangeableFigures

  override def whoseTurn: String = gameInstance.whoseTurn

  override def statusText: String = gameInstance.statusText

  override def fieldToString: String = gameInstance.fieldToString

  override def cellContains(row: Int, col: Int): String = gameInstance.cellContains(row, col)

  override def cellIsBlack(row: Int, col: Int): Boolean = gameInstance.cellIsBlack(row, col)

  override def pawnPromoting: Option[String] = gameInstance.pawnPromoting
}
