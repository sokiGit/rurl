import org.apache.http.HttpStatus;
import org.apache.http.HttpResponse;
import org.apache.http.HttpResponseFactory;
import org.apache.http.HttpVersion;
import org.apache.http.impl.DefaultHttpResponseFactory;
import org.apache.http.message.BasicStatusLine;

HttpResponseFactory factory = new DefaultHttpResponseFactory();
HttpResponse response = factory.newHttpResponse(new BasicStatusLine(HttpVersion.HTTP_1_1, HttpStatus.SC_OK, null), null);
