import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductSearchModule } from './product-search/product-search.module';
import {GraphQLModule} from "@nestjs/graphql";
import * as path from "path";

const isDev = process.env.NODE_ENV === 'development';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://root:rootpassword@localhost/amazon-product-search', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }),
        GraphQLModule.forRoot({
            debug: isDev,
            playground: isDev,
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: path.join(process.cwd(), 'src/graphql.ts'),
            },
        }),
        ProductSearchModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
