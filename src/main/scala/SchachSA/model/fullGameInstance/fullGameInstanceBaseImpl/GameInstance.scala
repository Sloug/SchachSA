package SchachSA.model.fullGameInstance.fullGameInstanceBaseImpl

import SchachSA.model.fullGameInstance.FullGameInstanceInterface


case class GameInstance(logicController: LogicControllerHttpClient, userController: UserControllerHttpClient) extends FullGameInstanceInterface {
  def this() = this( new LogicControllerHttpClient, new UserControllerHttpClient)

  var previousSelection: Option[(Int, Int)] = Option.empty
  override def newGame: Unit = logicController.newField

  override def select(x: Int, y: Int): Boolean = {
    def isValid: Boolean = {

      def playerOfColor(cellContentBlack: Option[Boolean], blacksTurn: Boolean) = {
        if(cellContentBlack.isDefined) {
          if(!cellContentBlack.get && !blacksTurn)
            true
          else if(cellContentBlack.get && blacksTurn)
            true
          else
            false
        } else false
      }

      if (previousSelection.isEmpty) {
        if(userController.whitesTurn)
          playerOfColor(logicController.cellContentBlack(x,y), false)
        else
          playerOfColor(logicController.cellContentBlack(x,y), true)
      } else true

    }

    if(isValid) {
      if (previousSelection.isEmpty) {
        previousSelection = Option.apply((x, y))
        true
      } else {
        val tmp = previousSelection.get
        val wasValidMove = logicController.move(tmp._1, tmp._2, x, y)
        if(wasValidMove) {
          previousSelection = Option.empty
          if(!logicController.pawnPromoting.isDefined) {
            userController.nextRound
          }
        }
        wasValidMove
      }
    } else {
      false
    }

  }

  override def choose(choosed: String): Boolean = {
    if(logicController.choose(choosed)) {
      userController.nextRound
      true
    } else false
  }

  override def restart: Unit = logicController.newField

  override def undo: Unit = {
    userController.undoRound
    logicController.undo
  }

  override def redo: Unit = {
    userController.nextRound
    logicController.redo
  }

  //does not work, since user is not safed
  override def saveField: Unit = logicController.save

  //does not work, since user is not safed
  override def loadField: Unit = logicController.load

  override def getChangeableFigures: String = logicController.getChangeableFigures

  override def whoseTurn: String = userController.whoseTurn

  override def statusText: String = logicController.statusText

  override def fieldToString: String = logicController.fieldToString

  override def cellContains(row: Int, col: Int): String = logicController.cellContains(row, col)

  override def cellIsBlack(row: Int, col: Int): Boolean = logicController.cellIsBlack(row, col)

  override def pawnPromoting: Option[String] = logicController.pawnPromoting
}
