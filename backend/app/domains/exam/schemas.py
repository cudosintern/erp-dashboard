from pydantic import BaseModel

class StockSchema(BaseModel):
    value: int
    min: int
    max: int