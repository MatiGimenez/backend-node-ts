import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("varchar", { length: 16 })
    username: string

    @Column("varchar", { length: 120 })
    password: string
    
    @Column("varchar", { length: 120 })
    email: string

    @Column("integer")
    age: number

    @Column("datetime")
    birthDate: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}