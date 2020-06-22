package SchachSA.model.fullGameInstance

trait FullGameInstanceInterface {
  def newGame

  def select(x: Int, y: Int): Boolean

  def choose(choosed: String): Boolean

  def restart: Unit

  def undo: Unit

  def redo: Unit

  def save: Unit

  def load: Unit

  def getChangeableFigures: String

  def whoseTurn: String

  def statusText: String

  def fieldToString: String

  def cellContains(row: Int, col: Int): String

  def cellIsBlack(row: Int, col: Int): Boolean

  def pawnPromoting: Option[String]
}
