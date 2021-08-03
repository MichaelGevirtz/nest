import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({ name: 'host1' })
//@Unique(['host1'])
export class Tenant {

  @PrimaryColumn()
  host: string;

  @Column()
  name: string;

}
