# CREATE MODEL
# sequelize model:create --name User --attributes firstName:string

# mirgate 
# sequelize-cli db:migrate

# undo migrate last
# sequelize-cli db:migrate:undo

# undo migrate all
# sequelize-cli db:migrate:undo:all


# create migration file 
# sequelize-cli migration:create --name add-email-to-user