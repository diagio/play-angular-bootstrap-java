package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import models.PlayerConnect;
import models.PlayerInfo;
import play.*;
import play.data.Form;
import play.libs.F;
import play.libs.Json;
import play.mvc.*;

import scala.util.parsing.json.JSONObject;
import views.html.*;
import views.html.index;


import play.libs.WS;
import play.mvc.Result;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import static play.libs.F.Function;
import static play.libs.F.Promise;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    public static Result javascriptRoutes() {
        response().setContentType("text/javascript");
        return ok(
            Routes.javascriptRouter("jsRoutes")
        );
    }

    public static Promise<Result> search(String query) {
        Promise<WS.Response> responsePromise = WS.url("https://www.googleapis.com/youtube/v3/search")
                .setQueryParameter("part", "snippet")
                .setQueryParameter("q", query)
                .setQueryParameter("key", "AIzaSyDg-_FDKc2FDD2kAzZSE3Idtjf4O2Ynm58")
                .get();
        Promise<Result> resultPromise = responsePromise.map(new Function<WS.Response, Result>() {
            @Override
            public Result apply(WS.Response response) throws Throwable {
                if (response.getStatus() != OK)
                    return status(response.getStatus(), response.getBody());

                JsonNode searchResponse = response.asJson();
                return ok(transformJson(searchResponse));
            }
        });
        return resultPromise;
    }

    private static JsonNode transformJson(JsonNode searchResponse) {
        return searchResponse;
    }

}
